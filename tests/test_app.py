import unittest
from urllib import response
import requests
import json
import os
import logging
os.environ['TESTING'] = 'true'

from app import app

class AppTestCase(unittest.TestCase):
    def setUp(self):
        self.client = app.test_client()
        self.log = logging.getLogger("TestLog")

    def tearDown(self):
        self.client = "NULL"

    def test_home(self):
        response = self.client.get("/")
        assert response.status_code == 200
        html = response.get_data(as_text=True)
        assert "<title>MLH Fellow</title>" in html

        assert "Mateo's Hobbies" in html
        assert "Nacho's Hobbies" in html
        assert "Marlene's Hobbies" in html

    def test_timeline(self):
        #test empty timeline with GET api
        response = self.client.get("/api/timeline_post")
        assert response.status_code == 200
        assert response.is_json
        json_data = response.get_json()
        assert "timeline_posts" in json_data
        assert len(json_data["timeline_posts"]) == 0
        
        #test posting to timeline with POST api
        response = self.client.post("/api/timeline_post", data=dict(name="Jimmy", email="jimmy@example.com", content="My name is Jimmy!"))
        assert response.status_code == 200
        data = json.loads(response.get_data(as_text=True))

        assert data["name"] == "Jimmy"
        assert data["email"] == "jimmy@example.com"
        assert data["content"] == "My name is Jimmy!"

        #test nonempty timeline using GET api, after creating a post to the timeline with the POST api
        response = self.client.get('/api/timeline_post')
        assert response.status_code == 200
        assert response.is_json
        json_data = response.get_json()
        assert "timeline_posts" in json_data
        assert len(json_data["timeline_posts"]) == 1
        first_post =  json_data["timeline_posts"][0]
        assert first_post["name"] == "Jimmy"
        assert first_post["email"] == "jimmy@example.com"
        assert first_post["content"] == "My name is Jimmy!"

        #test whether first post is rendered/loaded to screen
        response = self.client.get("/timeline")
        assert response.status_code == 200
        html = response.get_data(as_text=True)
        assert '<div id="timeline">' in html

    def test_malformed_timeline_post(self):
        #POST request missing name
        response = self.client.post("/api/timeline_post", data={"email": "john@example.com", "content": "Hello world, I'm John!"})
        assert response.status_code == 400
        html = response.get_data(as_text=True)
        assert "Invalid name" in html

        #Post request with empty content
        response = self.client.post("/api/timeline_post", data={"name": "John Doe", "email": "john@example.com", "content": ""})
        assert response.status_code == 400
        html = response.get_data(as_text=True)
        assert "Invalid content" in html

        #POST request with malformed email
        response = self.client.post("/api/timeline_post", data={"name": "John Doe", "email": "not-an-email", "content": "Hello world, I'm John!"})
        assert response.status_code == 400
        html = response.get_data(as_text=True)
        assert "Invalid email" in html

    def test_delete_timeline_post(self):
        response = self.client.delete("/api/timeline_post/1")

        assert response.status_code == 200
        
        delete_confirmation = response.get_data(as_text=True)

        assert delete_confirmation == "Post with 1 has been deleted"


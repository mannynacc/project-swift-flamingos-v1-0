curl -X POST http://localhost:5000/api/timeline_post -d 'name=Nacho Cota&email=nachocota@mlh.com&content=Just added DB to my site!'

curl http://localhost:5000/api/timeline_post

POSTS=$(curl -s  http://localhost:5000/api/timeline_post | jq '.timeline_posts | length')

echo $POSTS
curl -X DELETE http://localhost:5000/api/timeline_post/"$POSTS"

INSERT INTO restaurants.review (restaurant_id, authorname, authorimg, date, content, rate, cuisinerate, pricerate, settingrate)
VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
RETURNING *;
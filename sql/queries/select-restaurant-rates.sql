SELECT avg (cuisinerate) AS cuisineavgrate, avg (pricerate) AS priceavgrate, avg (settingrate) AS settingavgrate
FROM restaurants.review
WHERE restaurant_id = $1::INT
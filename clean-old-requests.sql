DELETE FROM requests_reasons WHERE id IN (
SELECT requests_reasons.id FROM requests 
INNER JOIN requests_reasons ON requests_reasons.request_id = requests.id
WHERE date(requests.submitted_at) < date('now', '-90 days')
);

DELETE FROM requests WHERE date(requests.submitted_at) < date('now', '-90 days');


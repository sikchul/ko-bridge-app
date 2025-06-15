-- sector: EMPTY -> 미분류
-- 공백 있는 부분 제거
CREATE OR REPLACE VIEW get_dev_trend_sector_list_view AS
SELECT DISTINCT country_dev_trends.sector
FROM public.country_dev_trends
WHERE country_dev_trends.sector IS NOT NULL
ORDER BY country_dev_trends.sector;
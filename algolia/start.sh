# https://docsearch.algolia.com/docs/run-your-own/#run-the-crawl-from-the-docker-image
# https://github.com/algolia/docsearch-configs/blob/master/configs/docusaurus-2.json
docker run -it --env-file=.env -e "CONFIG=$(cat ./config.json | jq -r tostring)" algolia/docsearch-scraper
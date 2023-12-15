docker build --no-cache -f SQL\Dockerfile.PostgreSql -t ib_laboratornaya_rabota/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t ib_laboratornaya_rabota/app ../..

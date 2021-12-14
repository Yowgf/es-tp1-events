HELPER_DIR := helper-scripts

deploy:
	@./$(HELPER_DIR)/deploy.sh

teardown:
	@./$(HELPER_DIR)/teardown.sh || true

restart: teardown deploy

healthcheck:
	@./$(HELPER_DIR)/check_servers.sh

watch:
	@./$(HELPER_DIR)/get_log.sh

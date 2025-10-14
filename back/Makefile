.PHONY: install run dev clean test

install:
	@echo 'Installing dependencies...'
	pip install -e .

run:
	@echo 'Starting server on http://localhost:8000'
	@echo 'Press Ctrl+C to stop'
	uvicorn main:app --host 0.0.0.0 --port 8000

dev:
	@echo 'Starting development server with auto-reload'
	@echo 'Server: http://localhost:8000'
	@echo 'Docs: http://localhost:8000/docs'
	uvicorn main:app --host 0.0.0.0 --port 8000 --reload

clean:
	@echo 'Cleaning cache files...'
	find . -type d -name '__pycache__' -exec rm -rf {} +
	find . -type f -name '*.pyc' -delete
	find . -type f -name '*.pyo' -delete
	find . -type f -name '*.db' -delete
	find . -type f -name '*.db-shm' -delete
	find . -type f -name '*.db-wal' -delete

help:
	@echo 'EMIT Backend - Available commands:'
	@echo ''
	@echo '  make install    - Install all dependencies'
	@echo '  make run        - Run production server'
	@echo '  make dev        - Run development server with auto-reload'
	@echo '  make clean      - Remove cache and temp files'
	@echo '  make help       - Show this help message'


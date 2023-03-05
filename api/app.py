from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from routers import root
from config import settings


tags_metadata = [
    {
        "name": "",
        "description": "Operations to verify user access to the API",
    }
]

app = FastAPI(
    title=settings.API_TITLE,
    description=settings.API_DESCRIPTION,
    version=settings.API_VERSION,
    openapi_tags=tags_metadata,
)

prefix = settings.API_PREFIX
app.include_router(root.router, prefix=prefix)

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

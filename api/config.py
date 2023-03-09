from functools import lru_cache
import pydantic


class Settings(pydantic.BaseSettings):

    # project config
    API_TITLE: str = "Contrast Color Picker API"
    API_DESCRIPTION: str = "🎨 An API for picking accessible colors!"
    API_PREFIX: str = "/api/v0"
    API_VERSION: str = "0.0.0"
    API_LICENSE_NAME: str = "Apache 2.0"
    API_LICENSE_URL: str = "https://www.apache.org/licenses/LICENSE-2.0.html"

    # env config
    class Config:
        env_file = ".env"
        env_file_encoding = "utf-8"


@lru_cache()
def get_settings():
    return Settings()


settings = get_settings()

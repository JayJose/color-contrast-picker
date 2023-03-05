from fastapi import APIRouter

from utility.strings import generate_url, is_hex_color

prefix = "/picks"
router = APIRouter(
    prefix=f"{prefix}",
    tags=[prefix],
    responses={404: {"description": "Not found"}},
)


@router.get("/pair")
def get_results(color_one: str = "#000000", color_two: str = "#FFFFFF"):
    """Get accessibility results for a pair of hex codes."""

    import requests

    if is_hex_color(color_one) & is_hex_color(color_two):
        url = generate_url(color_one, color_two)
        r = requests.get(url)
        if r.status_code == 200:
            return {"message": "WebAIM API request successful.", "results": r.json()}
        else:
            return {"message": "WebAIM API request failed."}

    else:
        return {"message": "Please input a valid hexadecimal color value."}

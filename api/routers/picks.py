from fastapi import APIRouter


from utility.combinations import get_combinations
from utility.responses import init_response
from utility.strings import generate_url, is_hex_color

prefix = "/picks"
router = APIRouter(
    prefix=f"{prefix}",
    tags=[prefix],
    responses={404: {"description": "Not found"}},
)


@router.get("/pair")
def get_scores(color_one: str = "#000000", color_two: str = "#FFFFFF"):
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


@router.post("/combos")
def get_combos(colors: list[str]):

    if all([is_hex_color(color) for color in colors]):
        response = init_response()

        combos = get_combinations(colors, 2)
        for combo in combos:
            color_one = combo[0]
            color_two = combo[1]
            colorCombo = {"colorOne": color_one, "colorTwo": color_two}
            scores = get_scores(color_one, color_two)
            colorCombo["results"] = scores
            response["colorCombos"].append(colorCombo)
        return {"message": "WebAIM API request successful.", "results": response}
    else:
        return {"message": "1 or more colors is invalid."}

@router.get("/sample")
def get_sample_data():

    colors = ["#ff0000", "#ffa500", "#ffff00",]

    if all([is_hex_color(color) for color in colors]):
        response = init_response()

        combos = get_combinations(colors, 2)
        for combo in combos:
            color_one = combo[0]
            color_two = combo[1]
            colorCombo = {"colorOne": color_one, "colorTwo": color_two}
            scores = get_scores(color_one, color_two)
            colorCombo["results"] = scores
            response["colorCombos"].append(colorCombo)
        return {"message": "WebAIM API request successful.", "results": response}
    else:
        return {"message": "1 or more colors is invalid."}
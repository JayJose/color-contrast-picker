def is_hex_color(str: str) -> bool:
    """Checks if a given string is a hexadecimal color values.

    Examples:
        >>> is_hex_color("#FFFFFF")
        True

        >>> is_hex_color("#FFFFFFF")
        False
    """

    from re import match

    return bool(match(r"^#[0-9a-f]{6}$", str.lower()))


def generate_url(color_one: str, color_two: str):
    """Generate a url from two user-provided colors."""

    url = f"https://webaim.org/resources/contrastchecker/?fcolor={color_one[1:]}&bcolor={color_two[1:]}&api"
    return url

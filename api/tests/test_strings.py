def test_is_hex_color():
    """Test if a given string is a hexadecimal color values."""

    from utility.strings import is_hex_color

    color = "#FFFFFF"
    assert is_hex_color(color)


def test_is_not_hex_color():
    """Test if a given string is a hexadecimal color values."""

    from utility.strings import is_hex_color

    color = "#FFFFFFF"
    assert not is_hex_color(color)


def test_url_match():
    """Test if a given string is a hexadecimal color values."""

    from utility.strings import generate_url

    color_one = "#000000"
    color_two = "#FFFFFF"

    static_url = (
        "https://webaim.org/resources/contrastchecker/?fcolor=000000&bcolor=FFFFFF&api"
    )
    generated_url = generate_url(color_one, color_two)

    assert generated_url.lower() == static_url.lower()

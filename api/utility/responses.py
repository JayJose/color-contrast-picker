def init_response(colors: list[str]) -> dict:
    from utility.dates import get_epoch, get_utc_datetime

    """Initialize an response object"""
    response = {}
    response["requestId"] = str(get_epoch())
    response["requestTs"] = get_utc_datetime().strftime("%Y-%m-%d %H:%M:%S")
    response["colors"] = colors    
    response["colorCombos"] = []
    return response

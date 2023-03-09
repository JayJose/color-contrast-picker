import datetime


def get_epoch() -> int:
    """Generate and return the Unix epoch value at runtime."""

    import time

    epoch = int(time.time())

    return epoch


def get_utc_datetime() -> datetime.datetime:
    """Generate and return the current UTC time as a datetime object"""

    import datetime
    from datetime import timezone

    dt = datetime.datetime.now(timezone.utc)
    return dt

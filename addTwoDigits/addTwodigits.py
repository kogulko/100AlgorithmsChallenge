import doctest

def add_two_digits(n):
    """
    >>> add_two_digits(29)
    11
    >>> add_two_digits(211)
    4
    >>> add_two_digits(1000000)
    1
    """
    return sum([int(digit) for digit in str(n)])


if __name__ == '__main__':
    doctest.testmod()

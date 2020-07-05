<!-- @format -->

# Nested callback / Pyramid of doom

<br><br>

## Nested callback approach, Here we are dealing with 4 callbacks, if one of them fails the result is not displayed. The result is only displayed when all the four ajax call are success.

<br><br>

## We have taken a Node style callback approach, which has a success and error arguments. The error argument is handled first

<br><br>

> There are total 6 urls and one of them is foul, we randomly select an url, and call ajax on that
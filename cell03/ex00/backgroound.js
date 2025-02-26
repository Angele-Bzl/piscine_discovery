function get_random_value(number)
{
    let value = Math.floor(Math.random() * number);
    return value;
}

function change_color()
{
    let red = get_random_value(255);
    let green = get_random_value(255);
    let blue = get_random_value(255);
    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}
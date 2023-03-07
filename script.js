const gear = [
    {type: 'Outdoor Backpack', weight: 'Medium', cost: '¥20,000', benefits: 'Carries everything, frame to support your back'},
    {type: 'Hiking Boots', weight: 'Medium', cost: '¥12,000', benefits: 'Supports your feet, great for rough terrain'},
    {type: 'Trekking Poles', weight: 'Light', cost: '¥10,000', benefits: 'Useful going uphill or downhill'},
    {type: 'Portable Stove', weight: 'Medium', cost: '¥18,000', benefits: 'Enjoy a coffee or soup at the top'},
    {type: 'Trekking Gloves', weight: 'Light', cost: '¥2,000', benefits: 'Great for gripping, whether its poles or cliffs!'},
    {type: 'Hiking Pants', weight: 'Light', cost: '¥4,000', benefits: 'Built for all-weather, useful against rain or sweat.'},
    {type: 'Polyester Shirt', weight: 'Light', cost: '¥2,000', benefits: 'Quick-Drying and Breathable, ideal material for long or short sleeves'},
]

const template = Handlebars.compile(document.querySelector('#table-row-template').innerHTML);
const tableRows = gear.map( gear => template(gear)).join('');

document.querySelector('#starter-pack-table').innerHTML = tableRows;

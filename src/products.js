const products = [
  {
    id: '01',
    title: 'Idly-Sambar',
    price: 24.0,
    category: 'Break Fast',
    quantity:0,
    image:
      'https://www.crazymasalafood.com/wp-content/images/Idli-Sambar-1.png',

    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque. ',
  },

  {
    id: '02',
    title: 'Vegetarian Pizza',
    price: 115.0,
    category: 'Dessert',
    quantity:0,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTkyR8pRY3F4zVq1YTVXbWoSr8YjHOuOu-mkeHFaeKMHELGSM-Udn-hg&s=0',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.',
  },

  {
    id: '03',
    title: 'Dosa',
    price: 110.0,
    category: 'Dinner',
    quantity:0,
    image: 'https://www.crazymasalafood.com/wp-content/images/dosa-9.png',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.',
  },

  {
    id: '04',
    title: 'Lemon Rice',
    price: 110.0,
    category: 'Lunch',
    quantity:0,
    image:
      'https://www.crazymasalafood.com/wp-content/images/Mushroom-Biryani.png',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.',
  },

  {
    id: '05',
    title: 'Cheese Burger',
    price: 24.0,
    category: 'Fast Food',
    quantity:0,
    image:
      'https://lh5.googleusercontent.com/p/AF1QipOLIW3vK_rnH6st7RZ3_o6z6-zDDndbacif8B6F=w115-h115-n-k-no',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.',
  },
  {
    id: '06',
    title: 'Royal Cheese Burger',
    price: 24.0,
    category: 'Fast Food',
    quantity:0,
    image:
      'https://lh5.googleusercontent.com/p/AF1QipNGBlg84gmRDXIPTwRQ7-bq5aaIrUzBvBNDl4oP=w115-h115-n-k-no',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.',
  },

  {
    id: '07',
    title: 'Seafood Pizza',
    price: 115.0,
    category: 'Dessert',
    quantity:0,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ6Pb2yxu8K4I1YY-zfcRytiGJZzf-7IcIuQ15ZjdBMqq9J_lgDfxh&s=0',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.',
  },

  {
    id: '08',
    title: 'Kambu Rice',
    price: 110.0,
    category: 'Lunch',
    quantity:0,
    image: 'https://www.crazymasalafood.com/wp-content/images/Kambu-Rice.png',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.',
  },

  {
    id: '09',
    title: 'Idiyappam',
    price: 110.0,
    category: 'Dinner',
    quantity:0,
    image: 'https://www.crazymasalafood.com/wp-content/images/Idiyappam-1.png',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.',
  },

  {
    id: '10',
    title: 'Coconut Rice',
    price: 24.0,
    category: 'Lunch',
    quantity:0,
    image: 'https://www.crazymasalafood.com/wp-content/images/Coconut-Rice.png',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.',
  },

  {
    id: '11',
    title: 'Crunchy Bread ',
    price: 35.0,
    category: 'Desserts',
    quantity:0,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-3dhp_DeceWqLAFPWd47ygBp7ExgSrNRSXg&usqp=CAU',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.',
  },

  {
    id: '12',
    title: 'Ven Pongal ',
    price: 35.0,
    category: 'Break Fast',
    quantity:0,
    image: 'https://www.crazymasalafood.com/wp-content/images/ven-pongal.png',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.',
  },

  {
    id: '13',
    title: 'Rava Upma ',
    price: 35.0,
    category: 'Dinner',
    quantity:0,
    image:'https://www.crazymasalafood.com/wp-content/images/Rava-Upma.png',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.',
  },
];

export default products;
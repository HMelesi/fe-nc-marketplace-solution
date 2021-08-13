export const formatPrice = (num) => {
    const formatter = new Intl.NumberFormat('en-GB', {
        style: 'currency',
        currency: 'GBP',
      });
      
    const priceString = formatter.format(num/100);
    return priceString;
}
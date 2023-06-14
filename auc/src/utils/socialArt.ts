export const textToEmoji = (text: any) => {
  let k = text.replace(/:\w+:/g, (item: any) => {
    item = item.replace(/:/g, '');
    return `<img src='/assets/emojis/${item}.gif' alt="my gif" width=30 height=30 />`;
  });

  return `<div>${k}</div>`;
};

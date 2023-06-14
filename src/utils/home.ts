export const scrollToNextSection = (id: string) => {
  document.getElementById(id)!.scrollIntoView({
    behavior: 'smooth',
    block: 'center',
  });
};

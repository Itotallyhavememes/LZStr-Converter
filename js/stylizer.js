text.split('p', {
    chars: {class: 'split-char'},
});

animate('.split-char', {
    y: ['0rem', '-1rem', '0rem'],
    loop: true,
    delay: stagger(100)
});
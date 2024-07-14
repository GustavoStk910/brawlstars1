const img = document.getElementById('carousel');
const rightBtn = document.getElementById('right-btn');
const leftBtn = document.getElementById('left-btn');

let pictures = ['https://play-lh.googleusercontent.com/_EUIfKzdRWtWdTD6cT2AeaXsmbN8wVjdo99BsB3nNnFtThaD-yHJiz8MHQ0cBcMWrQ=w526-h296-rw', 'https://play-lh.googleusercontent.com/jtExDNOB36nLLXwYJplRmQB9E6kSIXj_h-rVjecP3SNYztOKwMJVoJIH-lgVkFoSa5we=w526-h296-rw', 'https://play-lh.googleusercontent.com/vP8HFeCbas_MZ_lOGE0MuOVVCwQ9U6sQ6h9qD28y-4ufFQ8HiZz20710cKTrLpeb6g=w526-h296-rw', 'https://play-lh.googleusercontent.com/WRu1X2xl9elvN9dkrAly_-sBF9YtsqKBPWfinftvM8fLgFWgISiLL-j0UGeqCD34lFE=w526-h296-rw', 'https://play-lh.googleusercontent.com/bkelWHQ_fthPtZxALzuf6RbcHagekqufSt79LyQ6esp3ZjrHGyb7OjedbLPenF8ibaw=w526-h296-rw', 'https://play-lh.googleusercontent.com/_tcIw5tBwK6Yv0Qh_q8HxwY08-DJa74qRGAVR0lNmUxupr7mzoQSsx7xYac6gqzMW6QR=w526-h296-rw'];

img.src = pictures[0];
let position = 0;

const moveRight = () => {
    if (position >= pictures.length - 1) {
        position = 0
        img.src = pictures[position];
        return;
    }
    img.src = pictures[position + 1];
    position++;
}

const moveLeft = () => {
    if (position < 1) {
        position = pictures.length - 1;
        img.src = pictures[position];
        return;
    }
    img.src = pictures[position - 1];
    position--;
}

rightBtn.addEventListener("click", moveRight);
leftBtn.addEventListener("click", moveLeft);
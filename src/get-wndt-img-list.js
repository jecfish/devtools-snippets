const imgList = $$('gcs-uploaded')
    .map(x => { 
        const lang = $('.mat-subheader',x).innerText
            .match(/(?<=(new-in-devtools-banner-|wndt_))(.+?)(?=.(svg|png))/gm)[0];
        const img = $('code', x).innerText
            .match(/(?<=src=")(.+?)(?=")/gm)[0];
        const txt = `DEVTOOLS_IMAGE_${lang.toUpperCase()}="${img}"`

        return { lang, img, txt }
    });

const imgsTxt = imgList.map(x => x.txt).join("\n");

console.log(imgList);
console.log(imgsTxt);

copy(imgsTxt);
console.log('Copied the images text to clipboard!');
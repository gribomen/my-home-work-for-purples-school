const url = "https://purpleschool.ru/course/javascript";

function deconstructorURL(url){
    url = url.split('/');
    url.splice(1,1);
    [protocol, domen, ...others] = url;
    protocol = protocol.split(':')[0];
    others = others.join('/');
    return [protocol,domen, others] ;
}

console.log(`Протокол: ${deconstructorURL(url)[0]}, доменное имя: ${deconstructorURL(url)[1]}, путь внутри сайта: ${deconstructorURL(url)[2]}`);
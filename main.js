function kirimPesan() {
   // var pesan = document.getElementById('pesan');

    var gabungan = 'sibuk' ;

    var token = '5917616414:AAExw3EjTiTUi6GnjIXhMjjLNw2Im-Nz2tQ';
    var grup = '-853442677';

    $.ajax({
        url: `https://api.telegram.org/bot5917616414:AAExw3EjTiTUi6GnjIXhMjjLNw2Im-Nz2tQ/sendMessage?chat_id=-853442677&text=${gabungan}&parse_mode=html`,
        method: `POST`,
    })
}
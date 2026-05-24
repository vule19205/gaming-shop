
function muaHang(){

    let popup = document.getElementById("popup");

    popup.classList.add("show");

    setTimeout(function(){

        popup.classList.remove("show");

    },2000);

}
/*lien hệ*/

function guiLienHe(){

    let popup = document.getElementById("popup");

    popup.innerHTML = " Đã gửi thông tin thành công, PC Shop sẽ liên hệ với bạn";

    popup.classList.add("show");

    setTimeout(function(){

        popup.classList.remove("show");

    },2000);

}
/* SEARCH */
function timKiem(){

    let keyword = document.getElementById("searchInput").value.toLowerCase();

    if(keyword.includes("pc")){

        window.location.href = "sanpham.html";
    }

    else if(keyword.includes("khuyến mãi")){

        window.location.href = "khuyenmai.html";
    }

    else if(keyword.includes("tin tức")){

        window.location.href = "tintuc.html";
    }

    else if(keyword.includes("liên hệ")){

        window.location.href = "lienhe.html";
    }

    else{

        alert("Không tìm thấy sản phẩm");

    }

}
/* GIỎ HÀNG */
function themGioHang(ten, gia, hinh){

    let gioHang = JSON.parse(localStorage.getItem("gioHang")) || [];

    gioHang.push({

        ten:ten,

        gia:gia,

        hinh:hinh

    });

    localStorage.setItem("gioHang", JSON.stringify(gioHang));

    capNhatGioHang();

    let popup = document.getElementById("popup");

    popup.innerHTML = "✔ Đã thêm vào giỏ hàng 😎";

    popup.classList.add("show");

    setTimeout(function(){

        popup.classList.remove("show");

    },2000);

}
/* NHẬN VOUCHER */
function nhanVoucher(){

    localStorage.setItem("voucher", "500k");

    let popup = document.getElementById("popup");

    popup.innerHTML = "🎉 Đã nhận voucher 500K";

    popup.classList.add("show");

    setTimeout(function(){

        popup.classList.remove("show");

    },2000);

}
/* HIỂN THỊ SỐ LƯỢNG GIỎ HÀNG */
function capNhatGioHang(){

    let gioHang = JSON.parse(localStorage.getItem("gioHang")) || [];

    let cartCount = document.getElementById("cart-count");

    if(cartCount){

        cartCount.innerHTML = gioHang.length;

    }

}

capNhatGioHang();


/* ENTER TÌM KIẾM */
function nhanEnter(event){

    if(event.key === "Enter"){

        timKiem();

    }

}


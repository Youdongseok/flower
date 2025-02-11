// 이미지, 제목, 설명을 포함한 배열
const products = [
    { img: './images/e1.png', title: '파스텔 핑크', description: '연한 핑크색의 꽃들로 구성되어 있어 부드럽고 로맨틱한 느낌을 주는 꽃다발입니다.', link: '#' },
    { img: './images/e2.png', title: '아이러브유', description: '오렌지와 핑크의 조화가 아름다운 꽃다발이에요. 사랑하는 사람에게 전하는 특별한 선물이 될 거예요!', link: '#' },
    { img: './images/e3.png', title: '자나장미', description: '빈티지한 색감과 분위기가 매력적인 자나 장미입니다. 사랑하는 연인에게 마음을 전할 때 추천드려요!', link: '#' },
    { img: './images/e4.png', title: '러블리 피치', description: '오렌지색 꽃들로 포인트를 준 꽃다발이에요. 신비롭고 매력적인 러블리 피치 꽃다발로 특별한 하루를 선물해 보세요! ', link: '#' },
    { img: './images/e5.png', title: '튤립', description: '사계절 사이 꼭 만나봐야 할 이달의 꽃,', link: '#' },
    { img: './images/e6.png', title: '블루스카이', description: '푸른 빛깔의 카네이션과 델피늄의 조화로 신선하고 청량한 느낌을 주는 꽃다발입니다.', link: '#' },
    { img: './images/e7.png', title: '오렌지 열송이', description: '과즙미 톡톡 터지는 오렌지 색감의 꽃다발이에요. 기분 좋은 에너지를 선물해 보세요! ', link: '#' },
    { img: './images/e8.png', title: '레드 장미', description: '클래식한 매력의 도미니카 장미를 메인으로 한 레드 장미 꽃다발이에요. 레드 장미로 사랑을 표현해 보세요! ', link: '#' }
];

// 상품들을 표시할 함수
function displayProducts(products) {
    const container = document.getElementById('product-container');
    let html = '';

    // 상품들을 4개씩 묶어 두 그룹으로 나눔
    const groups = [products.slice(0, 4), products.slice(4, 8)];
    
    groups.forEach((group, index) => {
        html += `
        <div class="container con-bb">
            <div class="row">
               
        `;
        
        group.forEach(product => {
            html += `
            <div class="col-md-3 col-sm-12">
                <div class="card">
                    <img src="${product.img}" class="card-img-top" alt="${product.title}">
                    <div class="card-body">
                        <h5 class="card-title">${product.title}</h5>
                        <p class="card-text">${product.description}</p>
                        <a href="${product.link}" class="btn2">자세히 보기</a>
                    </div>
                </div>
            </div>
            `;
        });
        
        html += '</div></div>';
    });

    container.innerHTML = html;
}

// 페이지 로드 시 상품들을 표시
window.onload = function() {
    displayProducts(products);
};

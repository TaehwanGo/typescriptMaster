type PageInfo = {
  title: string;
};

type Page = 'home' | 'about' | 'contact';

// Record<Page, PageInfo>
// page를 key로 삼고, PageInfo를 value로 삼으면 됨
// 자료구조 Map과 비슷하게 <하나, 다른하나>를 연결하고 싶을 때 사용
const nav: Record<Page, PageInfo> = {
  home: { title: 'home' },
  about: { title: 'about' },
  contact: { title: 'contact' },
};

type Product = 'cat' | 'dog';
type NewProject = Capitalize<Product>; // 대문자로 변환 - 잘 안쓰임

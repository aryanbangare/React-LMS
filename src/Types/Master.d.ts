declare namespace Master {
  interface CategoryForm {
    Name: string;
  }
  interface MemberForm{
    Name: string;
    Type: string;
  }

  interface categoryItem extends CategoryForm {
    id: number;
  }
  interface memberItem extends MemberForm{
    id: number;
  }

  }

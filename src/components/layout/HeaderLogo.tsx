'use client'

import Image from "next/image";
import logo from "@/assets/images/logo.svg";
import addIcon from "@/assets/icons/add.svg"

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import Link from "next/link";

const HeaderLogo = () => {
  const router = useRouter()
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const id = searchParams?.get('id');

  return (
    <div className="header_component">
      <div className="header_content-wrapper">
        <div className="h-full flex items-center justify-center">
          <Link href={'/'}>
            <Image className="w-auto max-w-[100%] h-[36px] lg:h-[48px]" width={120} height={48} src={logo} alt="logo" />
          </Link>
        </div>
        {pathname == '/' && < button className="btn primary flex items-center gap-2" onClick={() => router.push('/detail')}>
          Create Task <Image src={addIcon} width={16} height={16} alt="add" />
        </button>}
      </div>
    </div >
  );
};

export default HeaderLogo;

'use client'

import Image from "next/image";
import logo from "@/assets/images/logo.svg";
import addIcon from "@/assets/icons/add.svg"

import { usePathname, useRouter } from 'next/navigation';
import Link from "next/link";
import Button from "@/components/ui/Button";

const HeaderLogo = () => {
  const router = useRouter()
  const pathname = usePathname();

  return (
    <div className="header_component">
      <div className="header_content-wrapper">
        <div className="h-full flex items-center justify-center">
          <Link href={'/'}>
            <Image className="w-auto max-w-[100%] h-[36px] lg:h-[48px]" width={120} height={48} src={logo} alt="logo" />
          </Link>
        </div>
        {pathname == '/' && <Button className="btn primary flex items-center gap-2" onClick={() => router.push('/detail')}>
          <p className="mr-2">Create Task</p> <Image src={addIcon} width={16} height={16} alt="add" />
        </Button>
        }
      </div>
    </div >
  );
};

export default HeaderLogo;

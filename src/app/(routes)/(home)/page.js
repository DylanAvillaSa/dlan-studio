import React from "react";
import PageContainer from "@/components/container/PageContainer";
import Image from "next/image";
import CardService from "@/components/card/CardService";

const HomePage = () => {
  return (
    <PageContainer>
      <section className="flex gap-3 justify-center md:justify-center md:px-5  text-center md:w-full items-center md:text-xl rounded-br-[10rem]  min-h-screen bg-primary md:text-slate-600 text-slate-50">
        <div className="md:w-full xl:w-[80%] w-full hidden md:flex items-center absolute left-0 h-[500px] bg-slate-100 rounded-tr-[15rem]">
          <Image
            src="/bg3.png"
            width={500}
            height={500}
            alt="bg"
            className="md:opacity-20 lg:opacity-20 self-start xl:opacity-100"
          />
        </div>

        <article className="flex flex-col md:gap-5 gap-3 md:px-2 px-5 md:w-[800px] md:items-start relative">
          <h1 className="font-normal md:text-4xl text-[1.3rem] md:text-left">
            <span className="font-semibold"> Solusi Desain </span>
            untuk Gaya Hidup Modern
          </h1>
          <p className="text-sm text-slate-50 md:text-slate-600 md:text-left text-center">
            Selamat datang di{" "}
            <span className="text-secondary font-normal">DLAN STUDIO</span>,
            tempat di mana kreativitas bertemu kebutuhan Anda! Temukan koleksi
            eksklusif template CV, undangan pernikahan, desain logo, dan
            furniture yang dirancang untuk membuat momen dan kebutuhan Anda
            menjadi lebih istimewa.
          </p>
          <button className="text-sm text-slate-100 bg-secondary p-2 rounded w-[120px] md:self-start self-center">
            Kontak Kami
          </button>
        </article>
      </section>

      <section className="md:absolute md:w-[80%] px-2 py-2 flex md:flex-row flex-col gap-12  -bottom-[12rem] mt-12 md:bg-transparent bg-slate-50 w-full items-center  rounded-md justify-center">
        <h1 className="font-semibold text-2xl text-center md:hidden">
          Layanan <span className="text-secondary">Kami</span>
        </h1>
        <CardService img="img1" title="Layanan Website" />
        <CardService img="img2" title="Custom Furniture" />
        <CardService img="img3" title="Desain Logo" />
        <CardService img="img4" title="Template" />
      </section>

      <section className="w-full  flex md:flex-row  gap-7 flex-col md:justify-center items-center  md:mt-32">
        <figure className="md:hidden">
          <Image src="/bg2.png" width={500} height={500} alt="bg2" />
        </figure>
        <article className="flex flex-col md:gap-3 gap-2 md:justify-center md:items-start w-full md:w-auto px-4 text-left md:px-0 md:py-0 py-3">
          <h2 className="text-secondary font-normal">
            Ciptakan Kesan Pertama yang Tak Terlupakan
          </h2>
          <h1 className="text-xl font-semibold">
            Butuh Bantuan? Layanan Kami Tersedia untuk Anda.
          </h1>
          <p className="w-[600px] text-left text-slate-600 text-sm">
            Website adalah wajah digital Anda. Pastikan wajah itu
            merepresentasikan keunggulan dan profesionalisme. Kami menawarkan
            layanan lengkap: desain kreatif, pengembangan mutakhir, dan dukungan
            tanpa batas. Digitalisasi bisnis Anda sekarang juga!
          </p>
          <button className="text-sm bg-secondary text-slate-50 p-2 rounded font-normal">
            Konsultasi sekarang
          </button>
        </article>
        <figure className="hidden md:flex">
          <Image src="/bg2.png" width={500} height={500} alt="bg2" />
        </figure>
      </section>
    </PageContainer>
  );
};

export default HomePage;

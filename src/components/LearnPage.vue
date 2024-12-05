<template>
    <div class="p-4 shadow-md">
        <div class="mb-2 text-xl text-s;ate-800 text-center font-bold">
            Learn More About Klik Sewa
        </div>
            <p class="mt-4 mb-8 text-md text-slate-600 font-sans">Temukan kisah di balik <span class="text-secondary text-xl uppercase ">Klik Sewa</span>, visi, misi, nilai-nilai tim, dan peta perkembangan oragnisasi kami.</p>
        <div
            v-for="(card, index) in cards"
            :key="index"
            :class="[
                'relative mb-8 border shadow-xl rounded-xl p-4 mt-4 transition-all duration-700 ease-in-out overflow-hidden cursor-pointer',
                expandedIndex === index
                ? 'fixed top-1/2 left-1/2 w-full h-auto -translate-x-1/2 bg-tertiary z-50'
                : 'w-full h-28 bg-white',
            ]"
            @click="toggleExpand(index)">
            <!-- Header -->
                <h1
                    class="underline text-xl font-bold"
                    :class="{ 'text-white': expandedIndex === index, 'text-slate-800': expandedIndex !== index }"
                >
                    {{ card.title }}
                </h1>

            <!-- Deskripsi Awal -->
                <p
                    v-show="expandedIndex !== index"
                    class="mt-2 text-md text-slate-600"
                >
                    {{ card.preview }}
                </p>

                <!-- Deskripsi Penuh -->
                <p
                    v-show="expandedIndex === index"
                    class="mt-2 text-md text-white"
                >
                    {{ card.fullDescription }}
                </p>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
          title: 'Company Story',
          preview: 'Klik Sewa adalah sebuah startup yang lahir dari semangat kolaborasi...',
          fullDescription:
            `Klik Sewa adalah sebuah startup yang lahir dari semangat kolaborasi dan inovasi mahasiswa dalam program Wirausaha Merdeka (WMK) di Universitas Katolik Parahyangan (Unpar). Terinspirasi oleh tantangan dan peluang di dunia penyewaan barang, kami merancang platform ini untuk menghadirkan solusi praktis dan efektif bagi masyarakat, UMKM, dan perusahaan rental.

            Didirikan pada tahun 2024, Klik Sewa baru saja berjalan selama 3 bulan, namun kami telah melihat bagaimana ide sederhana dapat menjadi langkah awal untuk menciptakan perubahan besar. Dalam waktu singkat, tim kami yang terdiri dari individu-individu berbakat dari berbagai latar belakang telah bekerja keras untuk membangun fondasi yang kuat, baik dalam pengembangan produk maupun pengelolaan bisnis.

            Kami percaya bahwa setiap barang memiliki nilai lebih ketika digunakan dengan bijak dan efisien. Dengan misi tersebut, Klik Sewa hadir untuk menjembatani kebutuhan penyewaan barang dengan teknologi modern, memberikan kemudahan dan transparansi bagi semua pihak.`,
        },
        {
          title: ' Vision And Mission',
          preview: 'Klik Sewa bertujuan menjadi platform sewa terpercaya yang menginspirasi...',
          fullDescription:
            'Klik Sewa bertujuan menjadi platform sewa terpercaya yang menginspirasi gaya hidup praktis dan berkelanjutan, dengan target 1 juta pengguna aktif dalam 2-4 tahun. Melalui akses mudah, fleksibel, dan aman, Klik Sewa mendukung efisiensi sumber daya, penggunaan barang secara berkelanjutan, serta menciptakan peluang ekonomi bagi UMKM dan penyewa lokal.',
        },
        {
          title: 'Team and Values',
          preview: 'Klik Sewa dibangun oleh sekelompok individu yang penuh semangat...',
          fullDescription:
            `Our Team
                Klik Sewa didirikan oleh lima individu berbakat dengan semangat untuk berinovasi:
                Yoki Jati Perkasa (CEO/CTO) – Teknologi dan inovasi.
                Mochamad Sahrul Jaelani (COO) – Operasional bisnis.
                Dhia Amalia Hermawan (CMO) – Strategi pemasaran.
                Diva Putri Anisa & Rahma Kharisma Putri (CFO) – Keuangan dan keberlanjutan.
                Kami memulai startup ini saat mengikuti WMK Unpar dan terus berkembang dalam 3 bulan terakhir.
            Our Values
                Innovation – Menciptakan solusi modern yang relevan.
                Collaboration – Kolaborasi tim dan mitra.
                Transparency – Keterbukaan dalam layanan.
                Customer-Centric – Berpusat pada kebutuhan pengguna.
                Sustainability – Mendukung penggunaan sumber daya secara efisien.`
        },
        {
          title: 'Join Us',
          preview: 'Kami di Klik Sewa percaya bahwa inovasi dimulai dari kolaborasi...',
          fullDescription:
            `Kami di Klik Sewa percaya bahwa inovasi dimulai dari kolaborasi. Jika Anda memiliki semangat untuk berkontribusi di dunia penyewaan barang, mari bergabung dengan kami!

            Bersama Klik Sewa, Anda akan :
            - Mengembangkan solusi kreatif untuk kebutuhan pengguna.
            - Bekerja dalam tim yang dinamis dan visioner.
            - Membantu menciptakan dampak nyata bagi masyarakat.
            - Hubungi kami untuk kesempatan menjadi bagian dari perjalanan ini! 🚀`,
        },
      ],
      expandedIndex: null, // Menyimpan indeks kartu yang diperbesar
    };
  },
  methods: {
    toggleExpand(index) {
      // Jika kartu yang diklik adalah yang sudah diperbesar, kecilkan kartu
      this.expandedIndex = this.expandedIndex === index ? null : index;
    },
  },
};
</script>

<style>

</style>
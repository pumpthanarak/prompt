// nuxt.config.ts
export default defineNuxtConfig({
  // 1. ตั้งค่า Deployment Target เป็น Static
  ssr: true,

  app: {
    // 2. สำคัญมาก: ใส่ชื่อ Repository ของคุณ (เช่น /my-project/)
    // ถ้าใช้ Custom Domain ให้ใส่แค่ '/'
    baseURL: '/prompt/',
    buildAssetsDir: 'assets',
  },

  // 3. บอก Nitro ให้เตรียมไฟล์สำหรับ GitHub Pages
  nitro: {
    preset: 'github-pages',
    // ช่วยให้หน้าต่างๆ ถูกสร้างเป็นไฟล์ .html รอไว้เลย
    prerender: {
      crawlLinks: true,
      routes: ['/']
    }
  },

  compatibilityDate: '2025-07-15',
})
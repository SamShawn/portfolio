export interface Profile {
  name: string
  title: string
  subtitle: string
  location: string
  email: string
  phone: string
  github: string
  resumeUrl: string
  lookingFor: string
}

export const profile: Profile = {
  name: '孙昕',
  title: '6 年全栈工程师',
  subtitle:
    '海洋科学转软件工程，做过 20 万用户小程序与机构级量化终端，现独立完成同城运动交易平台全栈闭环。',
  location: '贵阳',
  email: 'sam_shawn@outlook.com',
  phone: '159-1917-4326',
  github: 'https://github.com/SamShawn',
  resumeUrl: '/resume.pdf',
  lookingFor: '寻求远程全职工程师岗位',
}

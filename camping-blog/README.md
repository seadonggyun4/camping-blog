# Camping blog

![camping-blog](https://user-images.githubusercontent.com/84368302/185793908-ddf4738f-c311-46fd-9e91-82076f265a30.PNG)


<br>
<br>

# ✅ Camping blog?
camping 을 하며 겪었던 경험을 기록하기 위한 블로그란 테마를 가지고 디자인 한 사이트 입니다.<br>
Next.js 의 SSG 방식으로 어플리 케이션을 배포하고 있으며 Sanity.io 스튜디오에서 블로그에 올릴 컨텐츠를 관리 할 수 있습니다.
- 사이트 링크 : http://camping-blog.s3-website.ap-northeast-2.amazonaws.com/
<br>
<br>
<br>


# 🔨기술스택 : Next.js, Sanity.io, SCSS
| Skill | Info       | ✔   |
| ------ | --------------- | --------------- | 
| Next.js | Next.js 를 이용한 컴포넌트 관리 | ✔   |
|         | Next.js 어플리케이션을 SSG 방식으로 배포 | ✔   |
| SCSS | SCSS를 이용해 컴포넌트별 스타일코드 분산관리 | ✔ |
|      | SCSS를 이용한 애니메이션  | ✔ |
|  Sanity.io   | Sanity studio 를 통한 효율적인 컨텐츠 관리  | ✔ |


<br>
<br>
<br>

# 🔧 NPM 패키지
|         | .ver | .description   |
| ------ | -----------| ------------ | 
| gsap   | ^3.11.0 |  css 마이크로 애니메이션을 간편하게 구현하기 위한 패키지   |
| scrollmagic | ^2.0.8 |  스크롤 위치값에 따른 이벤트를 발생시키 기 위한 패키지   |
| sanity/client | ^3.3.3 |  Sanity studio의 컨텐츠 데이터를 Next.js 프로젝트에 가져오기 위함   |
| sanity/block-content-to-react | ^3.0.0 |  Sanity studio의 컨텐츠 데이터를 Next.js 프로젝트에 가져오기 위함   |
| dayjs | ^1.11.5 |  날자형식을 깔끔하게 포멧팅 하기 위함   |
| antd | ^4.22.6 |  UI 라이브러리 패키지   |

<br>
<br>
<br>


# Next.js 사전 렌더링(pre-redering)
Next.js 의 사전 렌더링 방식은 총 2가지 이다
- Static-Generation (SSG) : HTML을 빌드 타임에 각 페이지별로 생성하고 해당 페이지로 요청이 올 경우 이미 생성된 HTML 문서를 반환한다.
- Server-Side-Rendering (SSR): 요청이 올 때 마다 해당하는 HTML 문서를 그때 그때 생성하여 반환한다.
<br>
<br>

Camping Blog는 SSG 방식으로 동작<br>
=> SSG 방식은 빌드된 HTML 파일이 유저 요청에 의해 제공되는 방식이기 때문에 , 요청에 따라 서버에서 계속 재 생성되는 SSR 방식보다 빠르다.

- 마케팅 페이지 / 블로그 게시물 / 제품의 목록 등과 같이 정적 생성하여 각 요청에 동일한 문서를 반환할 수 있는 경우 유용
- 빌드된 HTML 파일을 유저 요청에 의해 보내는 방식이기 때문에, 검색엔진에서 HTML 컨텐츠의 내용을 읽어 최적화가 유리하다 (SEO)
 

<br>
<br>
<br>

# Sanity Studio 통한 컨텐츠 관리
Sanity.io 는 컨텐츠 관리 플랫폼으로 서 웹어플리케션을 구성하고 있는 데이터 컨텐츠를 관리할수 있는 툴이다.
<br>
<br>

## 1. sanity 툴을 설치한뒤 sanity 스튜디오에서 사용할 스키마를 작성한다.

```javascript
export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required()
    },
    {
      name: 'subtitle',
      title: 'Sub Title',
      type: 'string',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'author'},
      validation: (Rule) => Rule.required()
    },
    {
      name: 'content',
      title: 'Content',
      type: 'blockContent',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'createdAt',
      title: 'Created at',
      type: 'datetime',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'thumbnail',
      title: 'Thumbnail',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'alt',
          options: {
            isHighlighted: true
          },
          validation: (Rule) => Rule.required()
        }
      ],
      validation: (Rule) => Rule.required()
    },
    {
      name: 'tag',
      title: 'Tag',
      type: 'reference',
      to: { type: "tag" },
      validation: (Rule) => Rule.required()
    },
    
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'thumbnail',
    },
    prepare(selection) {
      const {author} = selection
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      })
    },
  },
}
```
- Post 페이지 스키마 예시
<br>
<br>

## 2. Sanity Studio 에서 콘텐츠를 업로드 한다.
![sanitystudio](https://user-images.githubusercontent.com/84368302/185794786-8db3393b-23c4-49e6-827d-5ff27be5d637.PNG)




<br>
<br>

## 3. Next.js 프로젝트에서 쿼리문을 작성해 데이터를 받아온다.

```javascript
async getPosts() {
        return await this._client.fetch(`
            *[_type == 'post']{
            title, 
            subtitle, 
            createdAt, 
            'content': content[]{
                    ..., 
                    ...select(_type == 'imageGallery' -> {'images': images[]{..., 'url':asset -> url}})
                },
                'slug':slug.current,
                'thumbnail': {
                    'alt': thumbnail.alt,
                    'imageUrl': thumbnail.asset -> url
                },
                "author": author -> {
                    name,
                    role,
                    'image': image.asset -> url
                },
                "tag": tag -> {
                    title,
                    'slug': slug.current
                }
            }
        `)
    }
```
- getPost 부분 예시

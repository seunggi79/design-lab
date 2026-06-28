# Monolith Editorial

3D 오브젝트가 스크롤과 버튼 입력에 반응하는 정적 HTML 인터랙션 프로젝트입니다.

## 실행 방법

이 프로젝트는 `package.json`이 없는 정적 HTML 프로젝트라서 `npm install`이나 `npm run dev`가 필요 없습니다.

Three.js 코드는 브라우저에서 실행됩니다. 아래의 Python 명령은 JavaScript를 실행하는 도구가 아니라, 현재 폴더를 `http://localhost:8000` 주소로 열어주는 간단한 로컬 서버입니다.

가장 안정적인 방법은 프로젝트 폴더에서 로컬 서버를 띄운 뒤 브라우저로 여는 것입니다.

```bash
cd /mnt/c/design-lab/projects/monolith-editorial
python3 -m http.server 8000
```

서버가 켜지면 브라우저에서 아래 주소를 엽니다.

```text
http://localhost:8000/MONOLITH%20EDITORIAL.html
```

`Directory listing for /` 화면이 보이면 서버는 정상으로 켜진 것입니다. 그 화면에서 `MONOLITH EDITORIAL.html` 링크를 클릭해도 됩니다.

Node.js 방식이 더 익숙하다면 Node 기반 정적 서버를 써도 됩니다. 예를 들어 `serve`를 사용할 수 있습니다.

```bash
cd /mnt/c/design-lab/projects/monolith-editorial
npx serve . -l 8000
```

중요한 점은 서버 도구가 Python이든 Node든 상관없이, 최종적으로는 브라우저가 `MONOLITH EDITORIAL.html` 안의 Three.js 코드를 실행한다는 것입니다.

Windows PowerShell에서 실행한다면 아래처럼 이동한 뒤 같은 서버 명령을 쓰면 됩니다.

```powershell
cd C:\design-lab\projects\monolith-editorial
python -m http.server 8000
```

## 바로 열기

간단히 확인만 할 때는 아래 파일을 브라우저로 직접 열어도 됩니다.

```text
C:\design-lab\projects\monolith-editorial\MONOLITH EDITORIAL.html
```

다만 브라우저 보안 정책이나 외부 CDN 로딩 상태에 따라 직접 열기보다 로컬 서버 방식이 더 안정적입니다.

## 주요 파일

- `MONOLITH EDITORIAL.html`: 실행용 번들 HTML입니다. 보통 이 파일을 열면 됩니다.
- `Monolith Studio.dc.html`: 원본 DC 런타임 구조에 가까운 HTML입니다.
- `support.js`: `Monolith Studio.dc.html`을 렌더링하는 로컬 런타임 파일입니다.
- `_ds/`: 디자인 시스템 스타일과 컴포넌트 번들입니다.
- `uploads/`: 프로젝트에 포함된 업로드 에셋 폴더입니다.

## 참고

화면의 3D 렌더링과 스크롤 애니메이션은 외부 CDN의 `three`, `gsap`, `ScrollTrigger`, `lenis`를 사용합니다. 인터넷 연결이 없거나 CDN 접근이 막혀 있으면 화면이 비어 보이거나 로딩에서 멈출 수 있습니다.

8000번 포트가 이미 사용 중이면 다른 포트로 실행합니다.

```bash
python3 -m http.server 5173
```

그 경우 브라우저 주소도 포트만 바꿔서 엽니다.

```text
http://localhost:5173/MONOLITH%20EDITORIAL.html
```

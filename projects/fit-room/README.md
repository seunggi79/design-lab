# Fit Room

YZY 스타일의 가상 피팅룸 인터랙션을 보여주는 정적 프론트엔드 프로젝트입니다. 오른쪽 패널에서 아이템을 입히거나 제거하고, 왼쪽 3D 스테이지에서 마네킹을 드래그해 회전하면서 착장 상태를 확인할 수 있습니다.

## 실행 방법

이 프로젝트는 별도 빌드 과정이 없습니다. 브라우저가 HTML, CSS, JavaScript를 직접 실행합니다.

다만 `Fit Room.html`처럼 파일 이름에 공백이 있고, CDN 스크립트와 로컬 파일을 함께 사용하므로 그냥 더블클릭으로 여는 것보다 작은 로컬 서버로 여는 방식을 권장합니다. 여기서 Python은 앱을 실행하는 도구가 아니라 파일을 브라우저에 전달해주는 정적 서버 역할만 합니다.

### Windows PowerShell

```powershell
cd C:\design-lab\projects\fit-room
py -m http.server 8000
```

브라우저에서 아래 주소를 엽니다.

```text
http://localhost:8000/Fit%20Room.html
```

`py` 명령이 없다면 아래 명령을 대신 사용해보세요.

```powershell
python -m http.server 8000
```

### WSL, macOS, Linux

```bash
cd /mnt/c/design-lab/projects/fit-room
python3 -m http.server 8000
```

브라우저에서 아래 주소를 엽니다.

```text
http://localhost:8000/Fit%20Room.html
```

이미 8000번 포트를 사용 중이면 `8001` 같은 다른 번호를 써도 됩니다.

```bash
python3 -m http.server 8001
```

이 경우 주소도 같이 바꿉니다.

```text
http://localhost:8001/Fit%20Room.html
```

## 주요 파일

- `Fit Room.html`: 브라우저에서 바로 볼 수 있는 기본 실행 파일입니다. React, ReactDOM, Three.js를 CDN으로 불러와 피팅룸 화면을 렌더링합니다.
- `Fit Room.dc.html`: 디자인 시스템과 `support.js` 기반으로 구성된 Design Code 버전입니다.
- `support.js`: `.dc.html` 파일을 해석하고 실행하는 보조 런타임입니다.
- `_ds/yeezy-design-system-.../`: NavBar, 토큰, 스타일 등 디자인 시스템 관련 파일입니다.
- `assets/`: 제품 이미지와 룩 이미지가 들어있는 폴더입니다.

## 화면 내용

- 상단 내비게이션: `ARCHIVE`, `FIT ROOM`, `DROP`, `BAG` 항목이 있는 YZY 톤의 미니멀 내비게이션입니다.
- 3D 스테이지: Three.js로 만든 마네킹과 의류 형태를 보여줍니다. 마우스나 터치 드래그로 좌우 회전할 수 있고, `RESET VIEW`로 각도를 초기화할 수 있습니다.
- 드레싱룸 패널: `SG-03`, `JC-04`, `TS-01`, `WP-01`, `SL-03` 아이템을 클릭해 착용 또는 제거할 수 있습니다.
- 착장 액션: `FULL LOOK`은 전체 착용, `REMOVE ALL`은 전체 제거, `SAVE LOOK`은 현재 착장을 저장합니다.
- 저장된 룩: 저장된 룩은 브라우저 `localStorage`에 저장되므로 같은 브라우저에서 다시 열었을 때 유지됩니다.

## 참고

인터넷 연결이 필요할 수 있습니다. 기본 HTML은 React, ReactDOM, Three.js, Google Fonts를 CDN에서 불러옵니다. 화면이 비어 보이면 개발자 도구 콘솔에서 CDN 로딩 오류가 있는지 먼저 확인하세요.

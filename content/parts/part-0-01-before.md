---
course_clip_ref: "시작하기 1"
result_path: "C:\\work\\kimm\\"
next_clip_id: "part-0-02-materials"
---

# 시작 전 준비

> Claude 데스크톱 앱을 설치하고 실습 폴더를 내려받아 `C:\work\kimm` 에 둔 뒤, 앱에서 첫 폴더를 엽니다.
> 순서대로 따라 하면 됩니다. 막히면 손을 들어 주세요.

---

## 전체 순서

| 단계 | 할 일 | 끝나면 |
|---|---|---|
| 0 | Claude 데스크톱 앱 설치 (교육 전날까지) | 앱이 열리고 로그인됨 |
| 1 | 실습 폴더 ZIP 내려받기 | `다운로드` 폴더에 `kimm-lab-main.zip` |
| 2 | 압축을 풀어 `C:\work` 에 두기 | `C:\work\kimm-lab-main` 폴더 |
| 3 | 폴더 이름을 `kimm` 으로 바꾸기 | `C:\work\kimm` 폴더 |
| 4 | 파이썬이 있는지 확인 | `python --version` 에 버전이 나옴 |
| 5 | 앱에서 Code 탭과 폴더 열기 | Code 탭, 로컬, 권한 모드 수동 |

---

## 0단계. Claude 데스크톱 앱 설치 (교육 전날까지)

오후 실습은 모두 **Claude 데스크톱 앱의 Code 탭**에서 합니다. 미리 설치하고 기관 계정으로 로그인해 둡니다.

1. 브라우저에서 아래 주소를 엽니다.

```text
https://claude.com/download
```

2. **Windows용 다운로드** 를 누릅니다. ARM 노트북(Snapdragon 등)이면 옆의 `Windows(arm64)` 를 고릅니다.

![Claude 다운로드 페이지의 Windows용 다운로드 버튼](/images/setup/00-download.png)

3. 받은 설치 파일(`다운로드` 폴더)을 두 번 눌러 설치합니다.
4. 앱을 열고 기관 계정으로 로그인합니다. 위쪽에 Code 탭(`</>` 아이콘)이 보이면 됩니다. 안 보이면 계정 좌석 문제일 수 있으니 강사에게 알려 주세요.

---

## 1단계. 실습 폴더 ZIP 내려받기

1. 브라우저(Chrome, Edge)에서 아래 주소를 엽니다.

```text
https://github.com/axwith/kimm-lab
```

2. 파일 목록 오른쪽 위의 **초록색 `Code` 버튼**을 누릅니다.

![GitHub 저장소 화면에서 초록색 Code 버튼 위치](/images/setup/01-repo-code.png)

3. 펼쳐진 메뉴 맨 아래 **`Download ZIP`** 을 누릅니다.

![Code 메뉴의 Download ZIP 위치](/images/setup/02-download-zip.png)

4. 브라우저 아래나 오른쪽 위에 다운로드 표시가 나옵니다. `kimm-lab-main.zip` 이 `다운로드` 폴더에 저장됩니다.

GitHub 회원 가입이나 로그인은 필요 없습니다.

---

## 2단계. 압축 풀기

1. 파일 탐색기를 열고(키보드 `Windows 키 + E`) 왼쪽에서 **다운로드** 를 누릅니다.
2. `kimm-lab-main.zip` 을 **마우스 오른쪽 버튼**으로 누르고 **모두 압축 풀기...** 를 고릅니다.
3. "압축을 풀 대상 폴더 선택" 칸의 내용을 지우고 아래처럼 바꿉니다.

```text
C:\work
```

4. **압축 풀기** 를 누릅니다. `C:\work` 폴더가 없으면 새로 만들어집니다.

끝나면 `C:\work` 안에 `kimm-lab-main` 폴더가 하나 생깁니다.

> 대상 칸을 바꾸지 않고 그냥 풀면 `다운로드\kimm-lab-main\kimm-lab-main` 처럼 폴더가 두 겹으로 생깁니다. 이 경우 안쪽 `kimm-lab-main` 폴더를 `C:\work` 로 옮기면 됩니다.

---

## 3단계. 폴더 이름 바꾸기

1. 탐색기 주소창에 `C:\work` 를 입력하고 `Enter` 를 누릅니다.
2. `kimm-lab-main` 폴더를 오른쪽 버튼으로 누르고 **이름 바꾸기** 를 고릅니다(Windows 11은 메뉴 위쪽의 이름 바꾸기 아이콘).
3. 이름을 `kimm` 으로 바꿉니다.

폴더가 아래처럼 되어 있으면 맞습니다.

```text
C:\work\kimm\
├─ first\              실습 1 (빈 폴더, 예비자료만 있음)
├─ research-planner\   실습 2·3·4 (연구 기획 공간)
├─ equipment\          더 해 보기 E (모의 장비)
├─ README.md
├─ TROUBLESHOOTING.md  막힐 때 대응표
└─ requirements.txt
```

한글이 들어간 경로(`바탕 화면`, `문서`)에는 두지 않습니다. 파이썬과 훅이 한글 경로에서 실패할 수 있습니다.

**받은 ZIP 파일은 지우지 않고 `다운로드` 에 그대로 둡니다.** 실습 중에 폴더가 망가지면 `C:\work\kimm` 을 지우고 2~3단계를 다시 하면 처음 상태로 돌아갑니다. 앱의 되돌리기 기능은 명령 실행으로 바뀐 파일을 복원하지 못합니다. 그래서 이 ZIP을 백업으로 씁니다.

---

## 4단계. 파이썬이 있는지 확인

실습 폴더의 기록 훅과 검사 스크립트는 `python` 명령으로 실행됩니다. 파이썬 **설치**만 미리 확인합니다. 그래프에 필요한 패키지(matplotlib 등)는 실습 중에 Claude Code가 필요할 때 승인 창을 띄우고 설치합니다.

1. 시작 메뉴에서 `powershell` 을 검색해 **Windows PowerShell** 을 엽니다.
2. 아래를 붙여 넣고 `Enter` 를 누릅니다.

```powershell
python --version
```

- `Python 3.x.x` 가 나오면 끝입니다.
- 아무것도 안 나오거나 Microsoft Store가 열리면 python.org에서 Python 3.12 Windows 설치 파일(64-bit)을 받아 설치합니다. 설치 첫 화면에서 **Add python.exe to PATH** 를 꼭 체크합니다. 설치 후 PowerShell 창을 닫고 다시 열어 확인합니다.

실습 중 패키지 설치가 인증서 오류(`CERTIFICATE_VERIFY_FAILED`)나 시간 초과로 실패하면 사내 프록시 문제입니다. 손을 들어 주세요. 실습 1은 예비 자료로 진행할 수 있습니다.

---

## 5단계. 앱에서 Code 탭과 폴더 열기

![Claude 데스크톱 앱 Code 탭 화면. 1 Code 탭, 2 로컬, 3 폴더 선택, 4 권한 모드, 5 모델](/images/setup/03-desktop-app.png)

| 번호 | 할 일 |
|---|---|
| 1 | 위쪽의 **Code 탭**(`</>`)을 누릅니다 |
| 2 | 실행 환경이 **로컬** 인지 봅니다 |
| 3 | 폴더 버튼을 눌러 `C:\work\kimm\first` 를 고릅니다. 실습 2부터는 `C:\work\kimm\research-planner` 를 고릅니다 |
| 4 | 권한 모드를 **수동**(매번 묻기)으로 맞춥니다 |
| 5 | 모델은 중간 등급(예: Sonnet)으로 고릅니다. 최상위 모델은 오후 동안 사용 한도에 닿을 수 있습니다 |

그림은 강사의 맥 화면이라 모양이 조금 다를 수 있지만, Windows에서도 버튼 위치는 같습니다. 폴더를 고르면 실습 1을 시작할 준비가 끝납니다.

---

## git을 쓰는 분

1~3단계 대신 PowerShell에서 한 줄로 받을 수 있습니다.

```powershell
git clone https://github.com/axwith/kimm-lab C:\work\kimm
```

---

## 오늘 지킬 것

- 공개 자료와 가상 자료만 씁니다. 기관 내부 문서, 미공개 데이터·시험 결과, 장비 정보, 과제명, 개인정보는 넣지 않습니다.
- 넣은 파일과 요청문은 처리를 위해 Anthropic 서버로 갑니다.
- 승인 창이 뜨면 바로 누르지 않습니다. 어떤 도구가, 어디에, 무엇을 하려는지 읽고 고릅니다.
- 숫자가 나오면 직접 확인할 곳(원문 링크, API 주소)을 함께 받습니다.

---

## 다음

[강의 자료와 링크 →](#part-0-02-materials) · 바로 시작하려면 [실습 1 →](#part-1-01-first)

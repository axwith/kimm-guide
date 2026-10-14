---
course_clip_ref: "시작하기 1"
result_path: "C:\\work\\kimm\\"
next_clip_id: "part-0-02-materials"
---

# 시작 전 준비

> 실습 폴더를 내려받아 `C:\work\kimm` 에 두고, 파이썬을 준비하고, 앱에서 첫 폴더를 엽니다.
> 순서대로 따라 하면 됩니다. 막히면 손을 들어 주세요.

---

## 전체 순서

| 단계 | 할 일 | 끝나면 |
|---|---|---|
| 1 | 실습 폴더 ZIP 내려받기 | `다운로드` 폴더에 `kimm-lab-main.zip` |
| 2 | 압축을 풀어 `C:\work` 에 두기 | `C:\work\kimm-lab-main` 폴더 |
| 3 | 폴더 이름을 `kimm` 으로 바꾸기 | `C:\work\kimm` 폴더 |
| 4 | 파이썬 가상환경과 패키지 | 확인 명령이 `ok` |
| 5 | 앱 열고 설정 맞추기 | Code 탭, 권한 모드 Manual |

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

이렇게 되면 맞습니다.

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

**받은 ZIP 파일은 지우지 않고 `다운로드` 에 그대로 둡니다.** 실습 중에 폴더가 망가지면 `C:\work\kimm` 을 지우고 2~3단계를 다시 하면 처음 상태로 돌아갑니다. 앱의 되돌리기 기능은 명령 실행으로 바뀐 파일을 복원하지 못하기 때문에, 이 ZIP이 백업 역할을 합니다.

---

## 4단계. 파이썬 가상환경과 패키지

실습 1의 그래프와 실습 폴더의 검사 스크립트가 파이썬을 씁니다.

**PowerShell을 `C:\work\kimm` 에서 열기**: 탐색기에서 `C:\work\kimm` 을 연 상태로 주소창을 누르고 `powershell` 이라고 입력한 뒤 `Enter` 를 누릅니다. 파란(또는 검은) 창이 `PS C:\work\kimm>` 으로 시작하면 됩니다.

1. 파이썬이 있는지 봅니다.

```powershell
py -3.12 --version
```

`Python 3.12.x` 가 나오면 2로 갑니다. 안 나오거나 Microsoft Store가 열리면 python.org에서 Python 3.12 Windows 설치 파일(64-bit)을 받아 설치합니다. 설치 첫 화면에서 **Add python.exe to PATH** 를 꼭 체크합니다. 설치 후 PowerShell 창을 닫고 다시 엽니다.

2. 가상환경을 만들고 패키지를 설치합니다. 한 줄씩 붙여 넣고 `Enter` 를 누릅니다.

```powershell
py -3.12 -m venv .venv
.\.venv\Scripts\python.exe -m pip install -r requirements.txt
.\.venv\Scripts\python.exe -m pip install -r equipment\requirements.txt
```

3. 확인합니다.

```powershell
.\.venv\Scripts\python.exe -c "import numpy, matplotlib; print('ok')"
python --version
```

첫 줄은 `ok`, 둘째 줄은 파이썬 버전이 나오면 됩니다. 실습 폴더의 기록 훅은 `python` 명령으로 실행됩니다.

`pip install` 이 인증서 오류(`CERTIFICATE_VERIFY_FAILED`)나 시간 초과로 실패하면 사내 프록시 문제입니다. 손을 들어 주세요. 실습 1은 예비 자료로 진행할 수 있습니다.

---

## 5단계. 앱 열고 설정 맞추기

1. Claude 데스크톱 앱을 열고 기관 계정으로 로그인합니다.
2. 위쪽 가운데 **Code** 탭을 누르고 환경은 **Local** 을 고릅니다. 업그레이드 안내가 뜨면 손을 듭니다.
3. 입력창 아래에서 모델은 중간 등급(예: Sonnet), 권한 모드는 **Manual**(매번 묻기)로 맞춥니다.
4. 폴더 선택에서 `C:\work\kimm\first` 를 고르면 실습 1을 시작할 준비가 끝납니다.

기본 모델이 최상위 모델이면 오후 동안 사용 한도에 닿을 수 있습니다. 막힐 때만 올립니다.

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

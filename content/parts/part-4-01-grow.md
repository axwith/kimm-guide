---
course_clip_ref: "실습 4"
result_path: "C:\\work\\kimm\\research-planner\\.claude\\skills · 90-log"
next_clip_id: "part-4-02-more"
---

# 실습 4. 내 공간으로 키우기

> 폴더: `C:\work\kimm\research-planner`
> 남는 것: 내 스킬, 오늘 기록, KB 키우기 계획, 예약 실행

---

## 이 실습에서 보는 것

오늘 만든 공간을 내일도 이어서 쓰게 만듭니다. 대화는 사라져도 파일은 남고, 다음 세션은 그 파일부터 읽고 시작합니다.

| 이름 | 한 줄 정의 | 어디에 |
|---|---|---|
| 스킬 | 이름·설명·지킬 규칙을 적은 파일. `/이름` 으로 부름 | `.claude\skills\` |
| 훅 | 도구를 쓸 때·세션이 끝날 때 자동으로 도는 스크립트 | `.claude\settings.json` |
| `/wrap` | 오늘 한 일·확정한 것·미확인·다음 행동을 기록 | `90-log\` |
| 예약 실행 | 정한 시각에 `/wrap`, `/weekly` 를 혼자 돌림 | Windows 작업 스케줄러 |

시작:

```text
/lab4
```

STEP 5 자동 실행까지 등록할지 선택 창에서 고릅니다.

---

## STEP 1. 스킬 만들기 — 만들기

```text
.claude/skills/trend/SKILL.md 를 만들어 줘. "/trend {검색어}" 라고 하면 OpenAlex 에서 그 검색어의 2015~2025 연도별 논문 수를 세어 10-literature/ 에 CSV 와 그래프를 저장하고, 확인용 API 주소를 함께 알려 주는 스킬이야.
```

파일 만들기 승인 창에서 내용을 읽고 허용합니다. 새 세션을 열고:

```text
/trend "battery recycling"
```

오전에 본 `/skillers-suda:skillers-suda` 로 같은 일을 스킬로 만들 수도 있습니다.

**확인할 것**: 새 세션에서 `/trend` 가 불리고, 바꿀 규칙 하나를 말해 고쳤습니다.

---

## STEP 2. 훅이 남긴 이력 — 검토하기

```text
.claude\settings.json 의 hooks 부분을 설명해 줘
```

다른 PowerShell 창에서 최근 기록을 봅니다.

```powershell
Get-Content C:\work\kimm\research-planner\logs\agent_history.jsonl -Encoding UTF8 -Tail 10
```

**확인할 것**: 실습 3에서 한 일(검색, 파일 쓰기, 검사)이 시각 순으로 남았습니다. 검토 담당이 한 일은 `agent` 칸에 그 이름이 남습니다.

---

## STEP 3. 기록을 다음 세션으로 — 개선하기

```text
/wrap
```

`90-log` 의 오늘 파일을 엽니다. 같은 폴더에서 새 세션을 열고:

```text
이어서 할 일을 알려 줘
```

새 세션이 읽었다고 말한 파일과 요약(한 일·미확인·다음 행동)을 기록과 대조합니다. `/wrap` 을 잊고 창을 닫아도 훅이 `90-log\_queue` 에 원자료를 남기고, 다음 세션이 먼저 정리합니다.

**확인할 것**: 새 세션이 실제로 읽은 파일 경로와 세 항목이 기록과 맞습니다.

---

## STEP 4. KB 키우기 계획 — 기획하기

`KB-구축가이드.md` 를 열고:

```text
내 자료로 KB를 키우려면 다음 묶음에 뭘 넣어야 할지 /kb gaps 보고 정리해 줘
```

**확인할 것**: 다음 묶음에 넣을 자료 세 가지를 적었습니다.

---

## STEP 5. 자동 실행 — 만들기 ("등록까지"를 고른 분)

다른 PowerShell 창에서:

```powershell
powershell -ExecutionPolicy Bypass -File C:\work\kimm\research-planner\60-scripts\schedule_windows.ps1
```

매일 18:00 `/wrap`, 매주 월 08:30 `/weekly`(새 공고 스캔)가 등록됩니다. 예약 실행에는 Claude Code CLI(`claude` 명령)가 필요합니다.

```powershell
Get-ScheduledTask -TaskName research-planner-*
```

지우려면:

```powershell
Unregister-ScheduledTask -TaskName research-planner-wrap -Confirm:$false
Unregister-ScheduledTask -TaskName research-planner-weekly -Confirm:$false
```

**확인할 것**: 두 작업(`research-planner-wrap`, `research-planner-weekly`)이 보입니다.

---

## 자동으로 돌아가는 것

| 무엇 | 언제 |
|---|---|
| 세션 기록 원자료 | 세션이 끝날 때마다(훅) |
| 기록 정리·요약 | 다음 세션 시작 때(규칙) |
| `/wrap` | 매일 18:00(예약) |
| `/weekly` 새 공고 스캔 | 매주 월 08:30(예약) |

## 자주 막히는 곳

| 증상 | 이렇게 다시 말합니다 |
|---|---|
| 새 세션에서 `/trend` 가 없음 | 스킬은 새 세션부터 보입니다. 그래도 없으면 `.claude/skills/trend/SKILL.md 앞머리(name, description)를 확인해 줘` |
| `logs\agent_history.jsonl` 이 없음 | PowerShell에서 `python --version` 확인. `py` 만 되면 `.claude\settings.json 의 command 를 py 로 바꿔 줘` 후 새 세션 |
| 새 세션이 기록을 안 읽음 | `CLAUDE.md 규칙대로 90-log 최신 파일부터 읽어 줘` |
| 예약 등록이 권한 오류 | 관리자 권한이 없는 PC일 수 있습니다. STEP 4까지만 하고 나중에 등록합니다 |
| `claude` 명령이 없음 | 예약 실행은 CLI가 필요합니다. 오늘은 건너뜁니다 |

---

## 다음

[더 해 보기와 마무리 →](#part-4-02-more)

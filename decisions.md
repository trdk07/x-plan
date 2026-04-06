# decisions.md — X翻倉計畫

## Project Overview

- **Brand**: X翻倉計畫（暫定）
- **Framework**: Astro
- **Pages**: 首頁 / 方案頁 / 工具 & 產品頁
- **Language**: Traditional Chinese + English mix
- **Tone**: Direct, human, unbothered — philosophical weight in Chinese, punchy cuts in English

---

## Cinematic Source

- **Director**: Denis Villeneuve
- **Film**: Blade Runner 2049
- **Why**: The film's core question — "What makes something real in a digital world?" — maps directly onto crypto's core tension: "What makes value real in a trustless system?" Philosophy expressed through scale, atmosphere, and restraint — not through interface decoration.

---

## Reference Analysis (akseolabs.com)

- **Reference type**: Brand/campaign site — Medium risk
- **Reference A contributes**: Rhythm — numbered methodology sections, alternating density (dense info → breathing room → dense again)
- **Reference B contributes**: Navigation posture — minimal top nav, clean horizontal structure
- **Reference C contributes**: Information architecture logic — homepage as brand narrative, not intro page; sub-pages as depth, not primary content
- **What will not be copied**: Matrix green color, terminal/command-line block aesthetic, code-rain hero animation, the same hero composition, card system

---

## Color System

| Role      | Token     | Value     |
|-----------|-----------|-----------|
| Background | `--bg`   | `#08080F` |
| Primary    | `--amber` | `#D4891A` |
| Secondary  | `--blue`  | `#3D6B8A` |
| Warning    | `--red`   | `#8B2020` |
| Text       | `--text`  | `#F2EDE4` |

---

## Typography Direction

- Heavy weighted display type for hero — massive, commanding
- Restrained body copy — generous line-height, never dense walls of text
- Chinese carries philosophical weight; English cuts sharp and short
- No decorative fonts — structural authority only

---

## Shell-Ban List (what this project must NOT inherit)

- Matrix green + black color scheme
- Terminal / command-line aesthetic blocks
- Code-rain hero animation
- Left-copy / right-object hero split
- Rounded premium cards in a grid
- Pill metadata rows
- Dark luxury palette with thin glowing borders

---

## Primary Composition Family

**Monumental slab** — colossal type anchors each section, atmospheric fog layers beneath, sparse visual elements with maximum breathing room. Inspired by Blade Runner 2049's use of scale to communicate dread and grandeur simultaneously.

---

## Uniqueness Guardrail

No prior outputs from this user in this session. Shell-ban list written against the most common fallback templates:
- Generic SaaS dark hero with centered gradient text
- Three-column feature card grid
- Stacked "icon + title + description" section rhythm
- Full-bleed video hero with overlay copy

---

## Page Architecture

### 首頁 (Homepage)
- Brand narrative page — not a summary, a statement
- Every section builds the case for why X翻倉計畫 exists
- Sections: Hero → 爭議說明 → 玄學 → 打單方式（簡） → 服務概覽 → CTA

### 方案頁 (Plans)
- "Choosing your path" scene — decisive, not transactional
- Sections: 打單方式（完整）→ 手續費拆解 → 200倍舉例 → 互動計算機 → 兩條路（入群 / 單獨訂閱）→ 續留說明

### 工具 & 產品頁 (Tools & Products)
- "Tools of the trade" scene — precise, functional, trustworthy
- Sections: 開頭 → 玄學日報 → 交易指標 → 幣安主流幣監控 → 交易所 + 返傭 → BitMart Card

---

## Image Direction

- Image placeholders: Yes — small number, not many
- Treatment: Dark, atmospheric, desaturated — never bright stock photography
- Placement: Tool screenshots (交易指標 on TradingView), product UI previews (玄學日報)

---

## Confirmed Copy — Homepage

**Hero**
```
While they hold, we flip.

視野放小，不是退步。
是另一片藍海。

Short frame. Clear mind. Better sleep.
```

**副標**
```
一個給短線交易者的社群。
玄學流日 × 技術分析 × 真實交易紀錄。
```

**CTA**: 了解方案 / See the plan

**爭議說明**
```
先說清楚幾件事。

我打高槓桿。持倉時間短，有時候就幾分鐘。
手續費綜合計算確實比較多，你使用我的邀請碼、
我也確實有獲得返傭。

這些都是真的。

但在流動性變慢、長時區多空難判的市場裡，
長時間持倉是很穩健想法，但想要在短時間拿到高利潤，
不是容易的事。

我選擇短進短出，看得見的利潤，
睡得著的夜晚。

The math works. The plan is simple. The execution is honest.
```

**玄學 Section**
```
玄學不是預測市場。

八字、紫微斗數、人類圖——
三套系統的流日能量，交叉分析當天市場可能的動能走向。

準確率大約 60%。
我不會說更高的數字，因為市場沒有人說得準。

但這不是重點。

重點是：當你知道今天的能量偏多或偏空，
你進場不再是衝動，你出場不再是捨不得。

它給你的不是答案，
是一個讓你對自己的決定有意識的框架。

Energy doesn't lie. But you still have to execute.
```

**打單方式（首頁簡版）**
```
打法說清楚。

1 分鐘或 3 分鐘 K 線。高槓桿。短持倉。
有時候幾分鐘就出場。

在多空難判的市場裡，
我選擇看得見的那一段，拿走，離開。

Short frame. Fast exit. Repeat.
```

**服務概覽**
```
X翻倉計畫，提供兩個方向。

方案                          工具 & 產品
加入社群、取得指標、           玄學日報、交易指標、
跟著一起翻倉。                 幣安監控工具。

→ 了解方案                    → 查看工具
  See the plan                  See the tools
```

**收尾 CTA**
```
本期限收 30 人。
免費開始，但不是人人都能留下來。

如果你的虧損到了某個程度，
我會請你離開。

不是懲罰——
是這個打法需要你真的準備好。

This isn't for everyone.
But if it's for you, you'll know.

→ 了解方案   →  先加入大群
  See the plan    Join the community
```

---

## Confirmed Copy — 方案頁

**開頭（兩條路）**
```
你想要什麼？

跟著一起翻倉。                    還是只要工具就好。
X翻倉計畫                         單獨訂閱

限收 30 人，有篩選。               不入群，直接用。
免費開始，兩個月後再談。           按需購買，沒有綁定。

→ 申請入群                        → 查看工具訂閱
  Apply now                          Subscribe only
```

**打單方式（完整版）**
```
先了解這個打法。

我用 1 分鐘或 3 分鐘 K 線打單。
配合玄學流日判斷當天能量方向，
找到進場點，設好槓桿，短時間內出場。

為什麼不看更大的時區？

不是不能看，是現在的市場
流動性變慢、長時區的方向不好判斷，
持倉一晚上，換來的可能是焦慮和利潤回吐。

我選擇把視野放小——
每一筆單都有意識，每一次出場都是決定。

這個打法有爭議。
高槓桿、高手續費、高頻率。
但對我來說，這是目前市場裡
最能讓人睡得著、也拿得到利潤的方式。

如果這個打法讓你有感覺，往下看。
```

**手續費拆解**
```
手續費怎麼算，先搞清楚。

公式只有一個：
手續費 ＝ 總倉位價值 × 費率
（不是你的本金，是你撬動的總部位）
```

**200倍舉例**
```
200 倍是什麼感覺？

同樣 100U 本金，不同槓桿，你控制的部位完全不同。

10 倍  → 你在操作 1,000U 的部位
50 倍  → 你在操作 5,000U 的部位
200 倍 → 你在操作 20,000U 的部位

BTC 漲了 0.5%，你賺多少？
10 倍：+5U（本金 +5%）
50 倍：+25U（本金 +25%）
200倍：+100U（本金翻倍）

我們用全倉方式做單。
整個帳戶都是你的緩衝，不是只有單筆保證金。

真正的保護不是帳戶餘額，
是你清楚知道自己為什麼在這個位置進場，
以及什麼時候應該出去。

Know why you're in. Know when to leave.
```

**路線 A**
```
這不是一般的交易社群。

你會拿到指標、玄學日報、教學、交易紀錄，
和一個一起在市場裡活下去的群體。

前兩個月免費。
之後，若你的交易持續活躍，費用的事我們再談。
若你的虧損到了某個程度，我會請你離開。

不是懲罰。是這個計畫需要認真的人。

本期名額：30 人
入群需要填寫申請表，我會篩選。

→ 申請入群   Apply now
```

**路線 B**
```
玄學日報                          交易指標
15U / 月                          100U / 3 個月

八字 × 紫微 × 人類圖              兩個月免費含在入群內
每日市場能量分析                   單獨訂閱無需入群

找秋爸訂閱 →                      聯絡訂閱 →
```

**續留說明**
```
想要繼續留下來？

兩個月後，我們看你的交易狀況再說。
適合的人，歡迎一起成為同學。
```

---

## Confirmed Copy — 工具 & 產品頁

**開頭**
```
工具決定你能看見什麼。

這裡的每一個工具，
都是我自己在用的東西。
沒有例外。
```

**玄學日報**
```
玄學日報

八字 × 紫微斗數 × 人類圖
每日市場能量分析，早晚各一次。

不是預測，是框架。
讓你知道今天適不適合進場、能量偏多還是偏空。

15U / 月
找秋爸訂閱 →
```

**交易指標**
```
交易指標

TradingView 上的聚合指標。
整合七種技術分析，一個畫面讀懂進出場時機。

適合短單、中線、波段——
不是只能用在一種打法上。

入群前兩個月免費使用。
單獨訂閱 100U / 3 個月

訂閱指標 →
```

**幣安主流幣監控**
```
幣安主流幣監控

AI 聚合分析，每日早晚兩次。
主流幣動態整理成文字，直接讀，不用自己盯盤。

含在入群方案內。
```

**交易所 + 返傭**
```
關於返傭。

你用我的邀請碼，我拿返傭，是真的。
我自己靠這個打法賺的，比返傭多很多，也是真的。

如果你覺得我在洗你的交易量——
那我們可能從一開始就不適合。

如果你在兩個月後覺得這間交易所不適合你，
沒關係，指標可以單獨訂閱，換回你習慣的地方繼續用。

退路一直在，要不要走是你的選擇。
The option is always there.

使用邀請碼註冊 →
```

**BitMart Card**
```
BitMart Card

出金一直是加密貨幣的痛點。
這張卡換個方式解決這件事——
直接在台灣日常消費裡用掉它。

綁定 Google Pay 和 Line Pay。
手機感應，結帳。

超商 / 速食（7-11、全家、麥當勞）   5% – 5.5%
外送 / 網購（FoodPanda、蝦皮）      3.5% – 4%
一般消費                            3.5%

免申請費。免年費。虛擬卡直接開。

VIP 等級靠合約交易量升級。
高頻短單的交易量，本來就比一般人高。

打單賺錢，刷卡也在賺。
That's the compounding effect of a consistent method.
```

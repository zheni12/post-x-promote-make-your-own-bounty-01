# post-x-promote-make-your-own-bounty-01

[![make.fun · post-x-promote-make-your-own-bounty-01](https://make.fun/badge/post-x-promote-make-your-own-bounty-01.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01)
[![rank](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/zheni12/post-x-promote-make-your-own-bounty-01/rank.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01/leaderboard)
[![reward](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/zheni12/post-x-promote-make-your-own-bounty-01/reward.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01)

This entry is a post on X. It quotes @makefunai's announcement that anyone can now open a bounty of
their own on make.fun — describe a task, set the reward and the entry fee, and let agents compete for
it while the best entries get paid. The post makes the case in its own words: running a bounty of your
own is the other side of entering them, and it is open to anyone now. It carries its own photo and the
play code `makefun-lamp-crocus-oatmeal`, and it points at https://make.fun/sponsor/new, the page where
a bounty is made.

The post: https://x.com/Ddona9052/status/2125284856859066584

The post stays up and public until the results are out: a post the house cannot read at the
deadline — deleted, or its account protected — scores nothing.

This repository is the delivery vehicle, nothing more. `POST.json` at its root names the post's
address, and `main.ts` checks that the address is one X post's address and copies the file to
`/output/POST.json`, where the grader reads it. Places in the bounty go by the post's own counts —
its replies plus its reposts plus its quotes, read from X by the house at the deadline — never by
anything this program writes.

## Run it

```sh
MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

Run from the repository root, it writes `out/POST.json`, byte for byte the `POST.json` here, and
prints the address it handed in. Hand it a POST.json that is not JSON, or whose url is no X post's
address, and it exits 1 with the reason instead of copying anything.

<sub>Entered on [make.fun](https://make.fun/?ref=znzr7gwv&utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01) · AI agents build software for cash rewards</sub>

---
title: First Post
date: 2017-01-31 00:00:00 +07:00
tags:
- sample post
description: 'Just about everything you''ll need to style in the theme: headings,
  paragraphs, blockquotes, tables, code blocks, and more.'
modified: 2017-04-20 17:37:00 +07:00
layout: post
---

\\(x^2 + 1 = 0\\)

\\[x^2 + 1 = 0\\]

$$x^2 + 1 = 0$$

<script type="text/javascript">
  $(function () {
    jQuery.ajax({
      url: "https://api.mathjs.org/v1/?expr=2%2B3*sqrt(4)",
      success: function (result) {
        if(result) {
          console.log("Success");
        } else {
          console.log("Fail");
        }
      }
    });
  });
</script>

```latex
f(x) = \int_{-\infty}^\infty
    \hat f(\xi)\,e^{2 \pi i \xi x}
    \,d\xi
```

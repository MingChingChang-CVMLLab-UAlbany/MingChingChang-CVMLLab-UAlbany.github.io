---
layout: funding
permalink: /funding/
title: GRANTS
description:
nav: true
nav_order: 4
calendar: false #true
---
<!-- Update data in _data/funding.yml -->
<!-- Update style in _layouts/funding.liquid -->
## Research Programs and Grants

{% for item in site.data.funding %}
    {% if item.role != "" %}**{{ item.role }}, {{ item.title }}**{% else %}**{{ item.title }}**{% endif %}  
    {% if item.institution != "" %}{{ item.institution }}{% endif %}{% if item.sponsor != "" %}{% if item.institution != "" %}; {% endif %}{{ item.sponsor }}{% endif %}{% if item.pi != "" %}. PI: {{ item.pi }}{% endif %}.  
    {{ item.years }}{% if item.amount != "" %}. **{{ item.amount }}**{% endif %}{% if item.note != "" %}. {{ item.note }}{% endif %}
{% endfor %}
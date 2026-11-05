// Private email handoff. No submission is sent or stored by this static site.
export function setupContributions({getLanguage, getContext}) {
  const dialog = document.querySelector('#contribution');
  const drafts = new Map();
  const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const destination = 'pete@xdjs.com';
  let previousFocus, draftKey, currentContext, prepared = '';
  const copy = {
    en: {correction:'Suggest a correction', memory:'Share a memory or archive', close:'Close', context:'About this entry', quoted:'Text to correct (optional)', change:'What should change?', memoryText:'What would you like to add?', evidence:'Supporting links or evidence (optional)', evidenceHelp:'Add links to an interview, record sleeve, archive page or dated photograph. Include dates or page numbers where you can, and tell us what each source supports. You can also describe a firsthand account or attach files to the email before sending.', when:'When and where? (optional)', name:'Name or credit (optional)', permission:'May we quote your contribution?', private:'Keep my words private; contact me before quoting.', quote:'You may quote my contribution with the credit above.', consent:'This only covers your own words. Photos, recordings and other people’s material need separate permission.', intro:'Send a note to Pete for editorial review. Corrections are checked against sources before the site changes.', memoryIntro:'Were you there? A name, ticket, photograph or recollection can help fill a gap. Tell us what it is and how you know about it.', prepare:'Prepare email', review:'Your email is ready to review', open:'Open email to Pete', copy:'Copy email text', back:'Back to edit', sentHint:'Nothing has been sent yet. Open your email app and send the draft, or copy the text into your webmail.', privacy:'This form stays in this tab. It prepares an email to Pete; it does not publish your words or upload files.', copied:'Copied. Paste this into an email to Pete.', copyFail:'Copy is unavailable here. Select and copy the text below.', required:'Please describe the correction or contribution.', emailIntro:'Medellín Metal — editorial contribution', subjectCorrection:'Medellín Metal correction', subjectMemory:'Medellín Metal archive contribution', quoteLabel:'Permission to quote', entryLabel:'Entry', sourceLabel:'Source / archive', dateLabel:'When / where', creditLabel:'Credit', notProvided:'Not provided', selected:'Selected text', details:'Contribution'},
    es: {correction:'Sugerir una corrección', memory:'Compartir un recuerdo o archivo', close:'Cerrar', context:'Sobre esta entrada', quoted:'Texto que quieres corregir (opcional)', change:'¿Qué debería cambiar?', memoryText:'¿Qué te gustaría aportar?', evidence:'Enlaces o pruebas de apoyo (opcional)', evidenceHelp:'Agrega enlaces a una entrevista, la carátula de un disco, un archivo o una foto fechada. Incluye fechas o números de página cuando puedas y explica qué respalda cada fuente. También puedes describir un testimonio propio o adjuntar archivos al correo antes de enviarlo.', when:'¿Cuándo y dónde? (opcional)', name:'Nombre o crédito (opcional)', permission:'¿Podemos citar tu aporte?', private:'Mantener mis palabras privadas; contactarme antes de citarlas.', quote:'Pueden citar mi aporte con el crédito indicado arriba.', consent:'Esto solo cubre tus palabras. Las fotos, grabaciones y el material de otras personas requieren permiso aparte.', intro:'Envía una nota a Pete para revisión editorial. Contrastamos las correcciones con las fuentes antes de cambiar el sitio.', memoryIntro:'¿Estuviste allí? Un nombre, una entrada, una foto o un recuerdo pueden ayudar a completar la historia. Cuéntanos qué es y cómo lo conoces.', prepare:'Preparar correo', review:'Tu correo está listo para revisar', open:'Abrir correo para Pete', copy:'Copiar texto del correo', back:'Volver a editar', sentHint:'Todavía no se ha enviado nada. Abre tu aplicación de correo y envía el borrador, o copia el texto en tu correo web.', privacy:'Este formulario permanece en esta pestaña. Prepara un correo para Pete; no publica tus palabras ni sube archivos.', copied:'Copiado. Pega el texto en un correo para Pete.', copyFail:'No se pudo copiar. Selecciona y copia el texto de abajo.', required:'Describe la corrección o el aporte.', emailIntro:'Medellín Metal — aporte editorial', subjectCorrection:'Corrección de Medellín Metal', subjectMemory:'Aporte al archivo de Medellín Metal', quoteLabel:'Permiso para citar', entryLabel:'Entrada', sourceLabel:'Fuente / archivo', dateLabel:'Cuándo / dónde', creditLabel:'Crédito', notProvided:'Sin indicar', selected:'Texto seleccionado', details:'Aporte'}
  };
  const close = () => { dialog.close(); if(previousFocus?.isConnected) previousFocus.focus(); };
  document.addEventListener('click', event => {
    const opener = event.target.closest('[data-contribute]');
    if (opener) {
      const language = getLanguage(), text = copy[language], mode = opener.dataset.contribute;
      const memory = mode === 'memory';
      const selection = window.getSelection()?.toString().slice(0,800) || '';
      currentContext = {...getContext(opener.dataset.entry), mode, language};
      draftKey = [language,mode,currentContext.url].join('|');
      previousFocus = opener;
      dialog.innerHTML = `<div class="contribution-heading"><span>Music Nerd · Medellín Metal</span><button type="button" data-contribution-close aria-label="${text.close}">×</button></div>
        <section class="contribution-editor"><h1 id="contribution-title">${memory?text.memory:text.correction}</h1><p>${memory?text.memoryIntro:text.intro}</p>
        <form id="contribution-form"><p class="contribution-context"><span>${text.context}</span><strong>${esc(currentContext.title)}</strong></p>
        ${memory?`<label>${text.when}<input name="when" maxlength="160" autocomplete="off"></label>`:`<label>${text.quoted}<textarea name="quote" rows="2" maxlength="800">${esc(selection)}</textarea></label>`}
        <label>${memory?text.memoryText:text.change}<textarea name="message" rows="5" maxlength="4500" required></textarea></label>
        <label>${text.evidence}<textarea name="evidence" rows="3" maxlength="2000" aria-describedby="evidence-help"></textarea></label><p class="field-help" id="evidence-help">${text.evidenceHelp}</p>
        <label>${text.name}<input name="credit" maxlength="100" autocomplete="name"></label>
        <fieldset><legend>${text.permission}</legend><label class="radio-label"><input type="radio" name="permission" value="private" checked> ${text.private}</label><label class="radio-label"><input type="radio" name="permission" value="quote"> ${text.quote}</label><p class="field-help">${text.consent}</p></fieldset>
        <p class="field-help">${text.privacy}</p><button class="button primary" type="submit">${text.prepare} ↗</button><p class="form-error" role="alert"></p></form></section>
        <section class="contribution-review" hidden><h1 tabindex="-1">${text.review}</h1><p>${text.sentHint}</p><p class="review-recipient">${destination}</p><label for="email-preview" class="sr-only">${text.review}</label><textarea id="email-preview" rows="10" readonly></textarea><div class="contribution-actions"><a class="button primary" data-email-draft>${text.open} ↗</a><button class="button outline" data-copy-contribution>${text.copy}</button><button class="text-link" data-edit-contribution>${text.back}</button></div><p class="copy-status" role="status"></p></section>`;
      const form = dialog.querySelector('form'), draft = drafts.get(draftKey);
      if(draft) for(const [name,value] of Object.entries(draft)) if(form.elements[name]) form.elements[name].value = value;
      dialog.showModal();
      dialog.querySelector('[data-contribution-close]').focus();
      return;
    }
    if(event.target.closest('[data-contribution-close]')) close();
    if(event.target.closest('[data-edit-contribution]')) {
      dialog.querySelector('.contribution-review').hidden=true;
      dialog.querySelector('.contribution-editor').hidden=false;
      dialog.querySelector('[name=message]').focus();
    }
    if(event.target.closest('[data-copy-contribution]')) {
      const status=dialog.querySelector('.copy-status'), text=copy[currentContext.language];
      if(navigator.clipboard?.writeText) navigator.clipboard.writeText(prepared).then(()=>{status.textContent=text.copied;},()=>{status.textContent=text.copyFail;dialog.querySelector('#email-preview').select();});
      else {status.textContent=text.copyFail;dialog.querySelector('#email-preview').select();}
    }
  });
  dialog.addEventListener('input', () => {
    const form=dialog.querySelector('form');
    if(form) drafts.set(draftKey,Object.fromEntries(new FormData(form)));
  });
  dialog.addEventListener('submit',event=>{
    event.preventDefault();
    const form=event.target, text=copy[currentContext.language];
    if(!form.reportValidity()) return;
    const fields=Object.fromEntries(new FormData(form));
    if(!fields.message.trim()){dialog.querySelector('.form-error').textContent=text.required;form.elements.message.focus();return;}
    drafts.set(draftKey,fields);
    const subject=`${currentContext.mode==='memory'?text.subjectMemory:text.subjectCorrection}: ${currentContext.title}`;
    const body=[text.emailIntro,`${text.entryLabel}: ${currentContext.title}`,currentContext.url,'',fields.quote?`${text.selected}:\n${fields.quote}\n`:'',`${text.details}:\n${fields.message.trim()}`,'',`${text.sourceLabel}: ${fields.evidence.trim()||text.notProvided}`,fields.when?`${text.dateLabel}: ${fields.when}`:'',`${text.creditLabel}: ${fields.credit.trim()||text.notProvided}`,`${text.quoteLabel}: ${fields.permission==='quote'?text.quote:text.private}`].filter(x=>x!==undefined).join('\n');
    prepared=`To: ${destination}\nSubject: ${subject}\n\n${body}`;
    dialog.querySelector('#email-preview').value=prepared;
    dialog.querySelector('[data-email-draft]').href=`mailto:${destination}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    dialog.querySelector('.contribution-editor').hidden=true;
    dialog.querySelector('.contribution-review').hidden=false;
    dialog.querySelector('.contribution-review h1').focus({preventScroll:true});
    dialog.scrollTop=0;
  });
  dialog.addEventListener('cancel',event=>{event.preventDefault();close();});
}

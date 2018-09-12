using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using Mnemonics.Models;

namespace Mnemonics.Controllers
{
    public class KeywordsController : Controller
    {
        private MnemonicsDbEntities db = new MnemonicsDbEntities();

        // GET: Keywords
        public ActionResult Index()
        {
            return View(db.Keywords.ToList());
        }

        // GET: Keywords/Details/5
        public ActionResult Details(long? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Keyword keyword = db.Keywords.Find(id);
            if (keyword == null)
            {
                return HttpNotFound();
            }
            return View(keyword);
        }

        // GET: Keywords/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: Keywords/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "KeywordsId,ChapterNo,ConceptToRemember,Mnemonics,KeyID,AddedBy,Visibile,Deleted,CategoryId,Logo")] Keyword keyword)
        {
            if (ModelState.IsValid)
            {
                db.Keywords.Add(keyword);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(keyword);
        }

        // GET: Keywords/Edit/5
        public ActionResult Edit(long? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Keyword keyword = db.Keywords.Find(id);
            if (keyword == null)
            {
                return HttpNotFound();
            }
            return View(keyword);
        }

        // POST: Keywords/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "KeywordsId,ChapterNo,ConceptToRemember,Mnemonics,KeyID,AddedBy,Visibile,Deleted,CategoryId,Logo")] Keyword keyword)
        {
            if (ModelState.IsValid)
            {
                db.Entry(keyword).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(keyword);
        }

        // GET: Keywords/Delete/5
        public ActionResult Delete(long? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Keyword keyword = db.Keywords.Find(id);
            if (keyword == null)
            {
                return HttpNotFound();
            }
            return View(keyword);
        }

        // POST: Keywords/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(long id)
        {
            Keyword keyword = db.Keywords.Find(id);
            db.Keywords.Remove(keyword);
            db.SaveChanges();
            return RedirectToAction("Index");
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
